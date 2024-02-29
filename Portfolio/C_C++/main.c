#include <stdio.h>

int fibonacci(int i) {
    if (i <= 1)
        return i;
    else
        return fibonacci(i - 1) + fibonacci(i - 2);
}

int main() {
    int A;
    
    // scanf("%d", &A);
    int B = 10;
    // int B = fibonacci(A);
    printf("%d\n", B);
    
    return 0;
}

