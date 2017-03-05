################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../src/C++\ Hello\ World.cpp \
../src/RootLevel1.cpp \
../src/RootLevel1_test.cpp \
../src/root.cpp \
../src/root_test.cpp 

OBJS += \
./src/C++\ Hello\ World.o \
./src/RootLevel1.o \
./src/RootLevel1_test.o \
./src/root.o \
./src/root_test.o 

CPP_DEPS += \
./src/C++\ Hello\ World.d \
./src/RootLevel1.d \
./src/RootLevel1_test.d \
./src/root.d \
./src/root_test.d 


# Each subdirectory must supply rules for building sources it contributes
src/C++\ Hello\ World.o: ../src/C++\ Hello\ World.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O3 -Wall -c -fmessage-length=0 -MMD -MP -MF"src/C++ Hello World.d" -MT"src/C++\ Hello\ World.d" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '

src/%.o: ../src/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O3 -Wall -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


