#include<stdio.h>
#include<string.h>

int main(){
int n = 10234567;
printf("10234567\n");
// while(n>0){
//     int x = n % 10;
//     n = n/10;
//     printf("%d", x);
// }
for(int i = n; i > =; i++){
    int x = n % 10;
    n = n/10;
    printf("%d", x);
    if(n <= 0) return 0;
}
return 0;
}