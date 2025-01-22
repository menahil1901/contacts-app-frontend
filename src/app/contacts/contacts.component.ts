import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { FormsModule } from '@angular/forms'; // Import FormsModule for [(ngModel)]

interface Contact {
  firstName: string;
  lastName: string;
  avatar: string;
  phoneNumber: string;
  department: string;
}

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  imports: [CommonModule, FormsModule], // Add CommonModule and FormsModule here
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  departments: string[] = [];
  searchQuery = '';
  selectedDepartment = '';
  currentPage = 1;
  pageSize = 5;
  selectedContact: Contact | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Contact[]>('http://localhost:3000/contacts').subscribe((data) => {
      this.contacts = data;
      this.filteredContacts = this.contacts;
      this.departments = [...new Set(this.contacts.map((c) => c.department))];
    });
  }

  get paginatedContacts(): Contact[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredContacts.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredContacts.length / this.pageSize);
  }

  // Updated filter function to handle search and department filtering dynamically
  filterContacts(): void {
    this.filteredContacts = this.contacts.filter((contact) => {
      const matchesSearchQuery =
        contact.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesDepartment =
        !this.selectedDepartment || contact.department === this.selectedDepartment;
      return matchesSearchQuery && matchesDepartment;
    });

    this.currentPage = 1; // Reset to first page after filtering
  }

  showContactDetails(contact: Contact): void {
    this.selectedContact = contact;
  }

  closeModal(): void {
    this.selectedContact = null;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
