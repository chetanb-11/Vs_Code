#include<iostream>
using namespace std;

void deletion(int arr[], int& n, int x){

    for(int i = 0; i < n; i++){
        if(arr[i] == x){
            for(int j = i; j < n; j++){
                arr[j] = arr[j+1];
            }
            n = n-1;
            return;
        }
    }

}


bool check_sorted(int arr[], int n){
    for(int i = 0; i < n-1; i++)
        if(arr[i]>arr[i+1])
            return false;
    return true;
}

int secondlargest(int arr[], int n){
    int largest = 0;
    int res = -1;
    for(int i = 0; i < n; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
        else if(arr[i] < largest && arr[i] > res){
            res = arr[i];
        }
    }
    return res;
}


int reverse(int arr5[], int n){
    int x = 0;
    for(int i = 0; i < n/2; i++){
        x = arr5[i];
        arr5[i] = arr5[n-i-1];
        arr5[n-i-1] = x;
    }
    for(int i = 0; i < n; i++){
        cout<<arr5[i]<<", ";
    } cout<<endl;
}

int removeduplicate(int arr6[], int n){
    int res = 1;
    arr6[res] = arr6[0];
    for(int i = 1; i < n; i++){
        if(arr6[res-1] != arr6[i]){
            arr6[res] = arr6[i];
            res++;
        }
    }
    for(int i = 0; i < res; i++){
        cout<<arr6[i]<<","; 

    }

}
int rotatearray(int arr7[], int n){
    int t = arr7[0];
    for(int i = 0; i < n-1; i++)
        arr7[i] = arr7[i+1];
    arr7[n-1] = t;
    for(int i = 0; i < n; i++)
        cout<<arr7[i]<<" ";
    cout<<endl;
}

int zeroatend(int arr8[], int n){
    int count = 0;
    for(int i = 0; i < n; i++){
        if(arr8[i] != 0){
            swap(arr8[i], arr8[count]);
            count++;
        }
    }
    for(int i = 0; i < n; i++){
        cout<<arr8[i]<<" ";
    }
}

int main(){
    int arr[]= {3, 8, 12, 5, 6};
    int x = 12;
    int n = sizeof(arr)/sizeof(arr[0]);
    deletion(arr, n, x);
    for(int i=0; i<n; i++) {
        cout << arr[i] << " "; 
    }

    int arr1[] = {-1, 20, 20, 50};
    int arr2[] = {20, 50, 40, 60};
    int arr3[] = {10, 40, 40, 50};
    cout<<"Check if array is sorted or not"<<endl;
    cout<<check_sorted(arr1, 4)<<endl<<check_sorted(arr2, 4)<<endl<<check_sorted(arr3, 4)<<endl;


    // Finding second largest element
    cout<<"Finding second largest element"<<endl;
    int arr4[] = {5, 20, 10, 15};
    n = sizeof(arr4)/sizeof(arr4[0]);
    cout<<secondlargest(arr4, n)<<endl;


    // Reverse an array 
    cout<<"Reverse an array"<<endl;
    int arr5[] = {5, 10, 20, 50};
    n = sizeof(arr5)/sizeof(arr5[0]);
    reverse(arr5, n);

    // Removes duplicates from array
    cout<<"Remove duplicates from array"<<endl;
    int arr6[] = {10, 20, 20, 30, 30, 30};
    removeduplicate(arr6, n);

    // Left Rotate an array by one
    cout<<"Left Rotate an array by one"<<endl;
    int arr7[] = {1, 3, 4, 6};
    n = sizeof(arr7)/sizeof(arr7[0]);
    rotatearray(arr7, n);

    // Move zero at end
    cout<<"Move zero at end"<<endl;
    int arr8[] = { 10, 20, 0, 0, 50, 0, 0};
    n = sizeof(arr8)/sizeof(arr8[0]);
    zeroatend(arr8, n);

}