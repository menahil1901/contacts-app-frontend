import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // For mocking HTTP requests
import { ContactsComponent } from './contacts.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContactsComponent, // Import the ContactsComponent here (instead of declaring it)
        HttpClientTestingModule, // Include necessary imports
        CommonModule,
        FormsModule
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ContactsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch contacts from the API', () => {
    const mockContacts = [
      {
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'avatar-url',
        phoneNumber: '123-456-7890',
        department: 'HR',
      },
    ];

    // Simulate HTTP response (this is where you would mock your HTTP requests)
    component.contacts = mockContacts;
    component.filteredContacts = mockContacts;

    expect(component.contacts.length).toBe(1);
    expect(component.filteredContacts.length).toBe(1);
  });

  it('should filter contacts by search query', () => {
    component.contacts = [
      { firstName: 'John', lastName: 'Doe', avatar: 'avatar', phoneNumber: '123', department: 'HR' },
      { firstName: 'Jane', lastName: 'Smith', avatar: 'avatar', phoneNumber: '456', department: 'IT' },
    ];

    component.searchQuery = 'Jane';
    component.filterContacts();

    expect(component.filteredContacts.length).toBe(1);
    expect(component.filteredContacts[0].firstName).toBe('Jane');
  });

  it('should paginate contacts correctly', () => {
    component.contacts = [
      { firstName: 'John', lastName: 'Doe', avatar: 'avatar', phoneNumber: '123', department: 'HR' },
      { firstName: 'Jane', lastName: 'Smith', avatar: 'avatar', phoneNumber: '456', department: 'IT' },
      { firstName: 'Alice', lastName: 'Johnson', avatar: 'avatar', phoneNumber: '789', department: 'Finance' },
      { firstName: 'Bob', lastName: 'Brown', avatar: 'avatar', phoneNumber: '012', department: 'HR' },
      { firstName: 'Charlie', lastName: 'Davis', avatar: 'avatar', phoneNumber: '345', department: 'HR' },
    ];
  
    // Ensure to call the filter method if needed
    component.filterContacts();
    
    // Set the pagination settings
    component.pageSize = 2;
    component.currentPage = 1;
  
    fixture.detectChanges(); // Apply changes
  
    expect(component.paginatedContacts.length).toBe(2); // First page should have 2 contacts
  
    // Switch to second page and re-test
    component.currentPage = 2;
    fixture.detectChanges(); // Apply changes for second page
  
    expect(component.paginatedContacts.length).toBe(2); // Second page should have 2 contacts
  });
  
});
