/*
 * RootLevel1.cpp
 *
 *  Created on: Oct 22, 2016
 *      Author: rumi
 */

#include "RootLevel1.h"

#include <iostream>

using namespace std;

void RootLevel1::publicprintf() {
	cout << "RootLevel1::publicprintf()" << endl;

	_protectedprintf();
}

void RootLevel1::_protectedprintf() {

	cout << "RootLevel1::protectedprintf()" << endl;
	protectedprintf();
}

RootLevel1::RootLevel1() {
	// TODO Auto-generated constructor stub

}

RootLevel1::~RootLevel1() {
	// TODO Auto-generated destructor stub
}

