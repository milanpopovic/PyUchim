#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Nov 11 09:24:47 2018

@author: milan
"""
from random import sample
girls = input('Girls (comma separated): ').split(',')
boys  = input('Boys  (comma separated): ').split(',')
while len(girls) != len(boys):
    if len(girls) > len(boys):
        boys += input('Add '+str(len(girls) - len(boys))+' boys: ').split(',')
    else:
        girls += input('Add '+str(len(boys) - len(girls))+' girls: ').split(',')
#girls=['Vesna','Vera','Sonja','Mila','Jovana','Dragana'] 
#boys =['Janko','Marko','Jovan','Zoran','Darko','Zvonko']       
#print(girls)
#print(boys)

g_favorites={girl:sample(boys,len(boys)) for girl in girls}
b_favorites={boy:sample(girls,len(girls)) for boy in boys}
print(g_favorites)
print(b_favorites)
day = 0
while 1:
    day += 1
    visitors = {}
    for boy,fav in b_favorites.items():
        if fav[0] not in visitors:
            visitors[fav[0]]=[boy]
        else:
            visitors[fav[0]].append(boy)
    flag = True
    for girl,candidates in visitors.items():
        if len(candidates) > 1: 
            flag = False
            break
#    print('Day',day,visitors)
    
    if flag and len(visitors.keys()) == len(girls): 
        for girl,boy in visitors.items():
            print(girl,'-',boy[0])
        break
    
    for girl,candidates in visitors.items():
        candidate = candidates[0]
        for boy in candidates:
            if boy == candidate: continue
            if g_favorites[girl].index(candidate) > g_favorites[girl].index(boy):
                del b_favorites[candidate][b_favorites[candidate].index(girl)]
                candidate = boy
            else:
                del b_favorites[boy][b_favorites[boy].index(girl)]


