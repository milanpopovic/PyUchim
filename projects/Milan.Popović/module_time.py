#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Nov 17 11:11:39 2018

@author: milan
"""

import time

#time.gmtime([secs])
print( time.gmtime(0) )
print( time.gmtime()  ) 

#time.localtime([secs])
print( time.localtime(0) )
print( time.localtime()  )

# time.sleep(secs)
time.sleep(2)

# time.strftime(format[, t])
print( time.strftime("%a, %d %b %Y %H:%M:%S +0000", time.gmtime()) )

# time.strptime(string[, format])
time.strptime("30 Nov 00", "%d %b %y")

# time.time()
print( time.time() )
t = time.time()
time.sleep(3)
print( time.time() - t )
