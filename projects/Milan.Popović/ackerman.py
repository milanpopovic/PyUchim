#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Dec  5 09:53:12 2018

@author: milan
"""
#calls=0
#
#def naive_ackermann(m, n):
#    global calls
#    calls += 1
#    if m == 0:
#        return n + 1
#    elif n == 0:
#        return naive_ackermann(m - 1, 1)
#    else:
#        return naive_ackermann(m - 1, naive_ackermann(m, n - 1))
#
#print(naive_ackermann(2,2))
#
#def A(m, n, s="%s"):
#    print (s % ("A(%d,%d)" % (m, n)) )
#    if m == 0:
#        return n + 1
#    if n == 0:
#        return A(m - 1, 1, s)
#    n2 = A(m, n - 1, s % ("A(%d,%%s)" % (m - 1)))
#    return A(m - 1, n2, s)
#
#print ( A(2,2) )
#
#def ackermann(m,n):
#    """computes the value of the Ackermann function for the input integers m and n.
#       the Ackermann function being:
#       A(m,n)=n+1               if m=0
#             =A(m-1,1)          if m>0 and n=1
#             =A(m-1,A(m,n-1)    if m>0 and n>0"""
#    if m==0:
#        print (n+1)
#        return n+1
#    elif m>0 and n==0:
#        print ("ackermann(",m-1,",",1,")")                                          #just 2 chk intrmdt val. and no. of steps invlvd.can be dltd if necessary
#        return ackermann(m-1,1)
#    elif m>0 and n>0:
#        print ("Ackermann(",m-1,",","Ackermann(",m,",",n-1,")",")")                  #just 2 chk intrmdt val. and no. of steps invlvd.can be dltd if necessary
#        return ackermann(m-1,ackermann(m,n-1)) 
#
#print(ackermann(2,2))

def my(n,m):
    if n == 0:
        return m
    elif m == 0:
        return n
    else:
        return my(n-1,m)+my(n,m-1)

#for n in range(10):
#    for m in range(10):
#        print(n,m,my(n,m))
        
print(my(14,14))
