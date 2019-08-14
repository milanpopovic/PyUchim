#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov 10 06:16:27 2018

@author: milan
"""

# Birthdays
# p(n) = 1-(365/365)*(364/365)*...*(365-n+1/365))
from random import randint,seed
t = 100000
seed()
for n in range(1,26,1):
    print(n,end=' ')
    c=0
    for i in range(t):
        bdays = [randint(1,365) for i in range(n)]
        if len(bdays) != len(set(bdays)):
            c +=1
    p=1
    for j in range(365-n+1,366):
        p = p*j/365
    print(round(c/t*100,2), round((1-p)*100,2))
