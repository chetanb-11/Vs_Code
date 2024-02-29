#include <stdio.h>

int main() {
  int i, j;
  
  for(i=1; i<=4; i++) {
    for(j=1; j<=i; j++) {
      if((i+j)%2 == 0) 
        printf("1 ");
      else
        printf("0 ");
    }
    printf("\n");
  }
  


    int rows = 5;

    for (int i = rows; i >= 1; i--) {
        // Print leading spaces
        for (int j = 1; j <= i; j++) {
            printf(" ");
        }

        // Print numbers
        for (int j = 1; j <= rows - i + 1; j++) {
            printf(" 0");  
        }

        printf("\n");
    }

  return 0;
} 