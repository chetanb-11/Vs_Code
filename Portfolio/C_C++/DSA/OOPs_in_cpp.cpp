#include<iostream>
using namespace std;


// Technique of making few things and functions private is known as Abstraction
// Technique of creating a class whsich has data members and functions together is called encapsulation

class Hero {

private:
    int Health;
public:
    char Level;
    static int timeToComplete;
    // Default Constructor
    Hero(){
        cout<<"Constructer called"<<endl;
    }

    // Parametarised Constructor
    Hero(int Health){
        // this is a pointer of address of current object
        this->Health = Health;
    }

    Hero(int Health, char Level){
        this->Health = Health;
        this->Level = Level;
    }

    // Copy Constructor
    Hero(Hero& temp){
        this->Health = temp.Health;
        this->Level = temp.Level;   
    }


    int gethealth(){
        return Health;
    }

    void sethealth(int h) {
        Health = h;
    }
    print(){
        cout<<' '<<Health<<" "<<Level<<endl;
        }
    
    // Destructor calling
    ~Hero(){
        cout<<"Destructor called"<<endl;
    }

    // Static function call
    static int time(){
        // Can only access static variables
        return timeToComplete;
    }
};

int Hero::timeToComplete = 5;

int main() {
    // Static allocation
    Hero h1;
    h1.sethealth(10);
    cout<<"h1 content"<<endl;
    cout<< h1.gethealth()<<endl;

    // Dynamic allocation
    Hero *h2 = new Hero;
    (*h2).sethealth(80);
    cout<<"h2 content"<<endl;
    cout<< (*h2).gethealth()<<endl;

    // other way of calling through pointer(arroy)
    h2->sethealth(90);
    cout<<h2->gethealth()<<endl;




    // Defalut Constructer
    // default constructer is called when object allocated
    Hero h3;
    Hero *h4 = new Hero;

    // Parametarised Constructor
    Hero h5(50);
    cout<<"h5 content"<<endl;
    h5.print();
    Hero h6(60, 'A');
    cout<<"h6 content"<<endl;
    h6.print();


    // Copes all parameters of h6 to h7 when copy constructor not declared
    Hero h7(h6);
    
    cout<<"h7 content"<<endl;
    h7.print();


    // Destructer call
    // Statically allocated objects calls its destructors automatically
    Hero h8;

    // Dynamically allocated objects calls its destructor manually
    Hero h9;
    delete &h9;

    // No need to create object to access static datatype
    cout<<" Time to complete level is: "<<Hero::timeToComplete<<endl;

    // Calling static functin named time
    cout<<" Time to complete level is: "<<Hero::time()<<endl;

    return 0;  
}   