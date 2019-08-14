#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Nov 11 14:38:42 2018

@author: milan
"""

# Fibonacci numbers

# Iterative  algorithm

def IterFib(n):
    if n <= 1:
        return 1
    f1,f2 = 1,1
    for i in range(n-1):
        f1,f2 = f2,f1+f2
    return f2

# Recursive algorithma

def RecFib(n):
    if n<=1:
        return 1
    else:
        return RecFib(n-1) + RecFib(n-2)

# Dynamamic programming algorithm
        
def DPFib(n,memo={}):
    if n <= 1:
        return 1
    else:
        if n not in memo:
            memo[n] = DPFib(n-1)+DPFib(n-2)
        return memo[n]


for i in range (50):
#    print(i,IterFib(i),RecFib(i),DPFib(i))
     print(i,IterFib(i),DPFib(i))
    