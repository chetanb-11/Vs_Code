#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i, j;

    printf("Enter a positive integer: ");
    if (scanf("%d", &n) != 1 || n <= 0) {
        printf("Error: Wrong input, Please enter a valid +ive integer.\n");
        return 1;
    }

    for (i = n; i >= 1; i--) {
        for (j = 1; j <= i; j++) {
            printf("%d ", i);
        }
        printf("\n");
    }

    return 0;
}
