#include<stdio.h>
#include<string.h>

int main(){
    char NAME[100], SURNAME[100];
    char full_name[1000];
    
    
    fgets(NAME, 1024, stdin);
    fgets(SURNAME, 1024, stdin);
  
    int n = strlen(NAME);
  
    NAME[n-1] = ' ';
    NAME[n] = '\0';
    
    strcpy(full_name, NAME);
    strcat(full_name, SURNAME);
  
    puts(full_name);

    return 0;
}