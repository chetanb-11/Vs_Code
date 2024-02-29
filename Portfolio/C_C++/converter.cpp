#include<iostream>
#include<math.h>
using namespace std;

int converter(int num, int type){
    int decimal = 0;
    for(int i = 0; num > 0; i++){
        int F = num % 10;
        num /= 10;
        decimal = decimal + (F * pow(type, i));
    }
    return decimal;
}

int main(){

    int num;
    int type;
    cout<<"Enter number: ";
    cin>>num;

    cout<<"Convert from: ";
    cin>>type;

    cout<<"Decimal number is: "<<converter(num, type)<<endl;

    return 0;
}