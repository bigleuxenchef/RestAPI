//============================================================================
// Name        : C++.cpp
// Author      : Eric
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>

#include "RootLevel1.h"

using namespace std;

void func2() {
	int count = 0;
	for (count = 0; count < 0XFFFFF; count++)
		{
		//cout  << count << "\r";
		cout.flush();
		}

	return;
}

void func1(void) {
	int count = 0;
	for (count = 0; count < 0XFF; count++)
		func2();

	return;
}

void func3(void) {
	int count = 0;
	for (count = 0; count < 0XFF; count++)
		func2();

	return;
}
int main() {
	cout << "!!!Hello World!!!" << endl; // prints !!!Hello World!!!
	//cout << "func 1 " <<
	func1();
	func2();

	RootLevel1 RootLevel1Instance;
cout << "Before call RootLevel1Instance.protectedprintf " << endl;
	RootLevel1Instance.protectedprintf();
	cout << "After call RootLevel1Instance.protectedprintf " << endl;

	RootLevel1Instance.publicprintf();

	return 0;
}
