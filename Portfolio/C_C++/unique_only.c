#include <stdio.h>

int main()
{
    int n;
    scanf("%d\n", &n);
    char arr[n];
    fgets(arr, n+1, stdin);
    for(int i = 0; i < n; i++){
        int found = 1;
        for(int j = i+1; j < n; j++){
            if(i != j && arr[i] == arr[j]){ found = 0; break;}
        }
            if(found) printf("%c", arr[i]);
    }

    return 0;
}
