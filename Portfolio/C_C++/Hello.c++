#include <iostream>
using namespace std;

int main() {
    int t;

    cin >> t;

    while (t--) {
        int n;
        cin >> n;
        int arr[n];

        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }

        for (int i = 0; i < n; i++) {
            cout << arr[i] << " "; // Add a space here to separate the elements
        }
    
        cout << endl; // Add a newline to separate test cases
    }

    return 0;
}
