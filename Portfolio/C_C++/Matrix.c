#include<stdio.h>

int main(){
    int A[2][2];
    int B[2][2];
    printf("Enter Matrix A:\n");
    printf("Enter R1C1: ");
    scanf("%d", &A[0][0]);
    printf("Enter R1C2: ");
    scanf("%d", &A[0][1]);
    printf("Enter R2C1: ");
    scanf("%d", &A[1][0]);
    printf("Enter R2C2: ");
    scanf("%d", &A[1][1]);
    
    printf("Enter Matrix B:\n");
    printf("Enter R1C1: ");
    scanf("%d", &B[0][0]);
    printf("Enter R1C2: ");
    scanf("%d", &B[0][1]);
    printf("Enter R2C1: ");
    scanf("%d", &B[1][0]);
    printf("Enter R2C2: ");
    scanf("%d", &B[1][1]);

    int C[2][2]; 
    C[0][0] = A[0][0] + B[0][0];
    C[0][1] = A[0][1] + B[0][1];
    C[1][0] = A[1][0] + B[1][0];
    C[1][1] = A[1][1] + B[1][1];
    
    printf("Sum of matrix A and B is C:\n");
    
    printf("%d\n", C[0][0]);
    printf("%d\n", C[0][1]);
    printf("%d\n", C[1][0]);
    printf("%d\n", C[1][1]);
    return 0;
}
    