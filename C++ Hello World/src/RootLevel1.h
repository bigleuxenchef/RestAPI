/*
 * RootLevel1.h
 *
 *  Created on: Oct 22, 2016
 *      Author: rumi
 */

#ifndef ROOTLEVEL1_H_
#define ROOTLEVEL1_H_

#include "root.h"

class RootLevel1: public root {
public:
	virtual ~RootLevel1();
	void publicprintf();



	RootLevel1();

protected:
	void _protectedprintf();
};

#endif /* ROOTLEVEL1_H_ */
