#include <stdio.h>
#include <math.h>

int main()
{

    // conditional operator
    int a = 1, b = 2, c = 3;
    // scanf("%d %d %d", &a, &b, &c);
    int d = a>b?a:b;
    printf("%d", d>c?d:c);

    // all operator
    if(a>b){
        printf("a is greater");
    }
    else if(a>=b){
        printf("a is greater or equalto");
    }
    else if(a<=b){
        printf("a is smaller or equalto");
    }
    else if(a<b){
        printf("a is smaller");
    }
    else if(a==b){
        printf("a is equalto");
    }
    printf("\n");
    // Right lest shifter
    printf("%d", 5>>2);
    printf("\n");

    // Swap two values
    // using third variable
    // without using third variable

    int a1, b1, c1;
    a1 = 5;
    b1 = 6;
    c1 = a1;
    a1 = b1;
    b1 = c1;
    printf("%d %d\n", a1, b1);

    a1 = a1 - b1;
    b1 = a1 + b1;
    a1 = b1 - a1;

    printf("%d %d\n", a1, b1);
    
    int t = 16;
    int u = sqrt(t);
    printf("%d", u);

    // Finding roots of equation

    printf("\n");
    printf("\n");
    printf("Finding roots of equation");
    int a2, b2, c2, d2;
    a2 = 6;
    b2 = 12;
    c2 = -35;
    d2 = (b2*b2) - (4*a2*c2);
    int alpha, beta;
    if(d2 >= 0){
        alpha = (0-b2 + sqrt(d2))/(2*a2);
        beta = (0-b2 + sqrt(d2))/(2*a2);
    } 
    printf("\n");
    printf("Alpha is %d Beta is %d", alpha, beta);

    // Types of statements
        // Decision making
            // if
            // if else
            // nested if
            // else if ladder
        // Iterative
            // for loop
            // do while
            // while
        // Selection
            // switch case
        // Jumping
            // goto

    // Compund statment means single line statement

    int a4 = 48, b4 = 40;
    if(a4 > b4)
        printf("\nA is greater\n");
    else
        printf("\nB is greater\n");

    // Nested if else
    if(a4 > b4)
        if(a4%2 == 0)
            printf("\nA is greater and even");
        else
            printf("\nA is greater and odd");
    else
            printf("\nB is greater");

    return 0;
}