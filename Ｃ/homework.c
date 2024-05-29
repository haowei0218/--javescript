#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define NAMELEN 20
#define PHONELEN 10

typedef struct student {
    char name[NAMELEN];
    int id;
    char phone[PHONELEN];
    float grade;
} Student;

typedef struct Node {
    Student student;
    struct Node* next;
} Node;

Node* head = NULL;

void add_student(char* name, int id, char* phone, float grade) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    strncpy(new_node->student.name, name, NAMELEN);
    new_node->student.id = id;
    strncpy(new_node->student.phone, phone, PHONELEN);
    new_node->student.grade = grade;
    new_node->next = head;
    head = new_node;
}

void delete_student(int id) {
    Node* current = head;
    Node* prev = NULL;
    while (current != NULL && current->student.id != id) {
        prev = current;
        current = current->next;
    }
    if (current == NULL) {
        printf("Student with ID %d not found.\n", id);
        return;
    }
    if (prev == NULL) {
        head = current->next;
    } else {
        prev->next = current->next;
    }
    free(current);
}

void print_students() {
    Node* current = head;
    while (current != NULL) {
        printf("Name: %s, ID: %d, Phone: %s, Grade: %.2f\n", current->student.name, current->student.id, current->student.phone, current->student.grade);
        current = current->next;
    }
}

void save_to_file(char* filename) {
    FILE* file = fopen(filename, "w");
    if (file == NULL) {
        perror("Error opening file");
        return;
    }
    Node* current = head;
    while (current != NULL) {
        fprintf(file, "%s,%d,%s,%.2f\n", current->student.name, current->student.id, current->student.phone, current->student.grade);
        current = current->next;
    }
    fclose(file);
}

void load_from_file(char* filename) {
    FILE* file = fopen(filename, "r");
    if (file == NULL) {
        perror("Error opening file");
        return;
    }
    char line[100];
    while (fgets(line, sizeof(line), file)) {
        char name[NAMELEN];
        int id;
        char phone[PHONELEN];
        float grade;
        sscanf(line, "%[^,],%d,%[^,],%f", name, &id, phone, &grade);
        add_student(name, id, phone, grade);
    }
    fclose(file);
}

int main() {
    int choice;
    char name[NAMELEN];
    int id;
    char phone[PHONELEN];
    float grade;
    char filename[100];

    while (1) {
        printf("1. Add student\n");
        printf("2. Delete student\n");
        printf("3. List students\n");
        printf("4. Save to file\n");
        printf("5. Load from file\n");
        printf("6. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter name: ");
                scanf("%s", name);
                printf("Enter ID: ");
                scanf("%d", &id);
                printf("Enter phone: ");
                scanf("%s", phone);
                printf("Enter grade: ");
                scanf("%f", &grade);
                add_student(name, id, phone, grade);
                break;
            case 2:
                printf("Enter ID to delete: ");
                scanf("%d", &id);
                delete_student(id);
                break;
            case 3:
                print_students();
                break;
            case 4:
                printf("Enter filename to save: ");
                scanf("%s", filename);
                save_to_file(filename);
                break;
            case 5:
                printf("Enter filename to load: ");
                scanf("%s", filename);
                load_from_file(filename);
                break;
            case 6:
                exit(0);
            default:
                printf("Invalid choice, please try again.\n");
        }
    }
    return 0;
}
