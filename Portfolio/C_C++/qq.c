#include <stdio.h>

int main() {
    int M[3][3] = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
    };

    int sumC, sumP;

    sumCornerPlusElements(M, &sumC, &sumP);

    printf("Sum of corner elements: %d\n", sumC);
    printf("Sum of elements on the plus position: %d\n", sumP);

    return 0;
}
void sumCornerPlusElements(int M[3][3], int *_sumC, int *_sumP) {
    // Initialize sum of corner and plus elements to 0
    *_sumC = 0;
    *_sumP = 0;

    // Calculate sum of corner elements
    *_sumC += M[0][0]; // Top-left corner
    *_sumC += M[0][2]; // Top-right corner
    *_sumC += M[2][0]; // Bottom-left corner
    *_sumC += M[2][2]; // Bottom-right corner

    // Calculate sum of elements on the plus position
    *_sumP += M[0][1]; // Top-middle
    *_sumP += M[1][0]; // Middle-left
    *_sumP += M[1][1]; // Center
    *_sumP += M[1][2]; // Middle-right
    *_sumP += M[2][1]; // Bottom-middle
}
