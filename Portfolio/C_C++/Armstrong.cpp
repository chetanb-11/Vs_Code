#include<iostream>
#include<math.h>
using namespace std;

int main(){

    int num;
    cout<<"Enter value of num"<<endl;
    cin>>num;
    int Onum = num;
    int sum = 0;
    while(num > 0){
        int lastdigit = num % 10;
        sum += pow(lastdigit, 3);
        num = num / 10;
    }
    
    if(sum == Onum){
        cout<<"Yes it's a armstrong number"<<endl;
    } else{
        cout<<"No it's not a armstrong number"<<endl;
    }

    return 0;
}