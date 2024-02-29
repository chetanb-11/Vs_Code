#include <stdio.h>
#include <string.h>
char salting(char password[]);
void dsalting(char password[]);
int main(){
    char password[16];
    printf("Enter password: ");
    scanf("%s", &password);
    dsalting(password);
   return 0;
}

char salting(char password[]){
    char newpass[20];
    char salt[] = "abc";
    strcpy(newpass, password);
    strcat(newpass, salt);
    printf("You'r new passorrd is: ");
    puts(newpass);
}

void dsalting(char password[]){
    printf("hii\n");
    int j=0;
    int newpassword[200];
    for(int i=0; password[j] != '\0'; i=i+2){
        newpassword[i] = password[j];
        newpassword[i+1] = j+1;
        j++;
    }    
    printf("%s", newpassword);
    //puts(newpassword);
}