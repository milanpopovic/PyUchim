
"""
Created on Sun Nov 11 15:03:22 2018

@author: milan
"""
bk=0
def TowerOfHanoi(n,from_stick,aux_stick,to_stick):
    global bk
    if n == 1:
        print('Move from', from_stick, 'to', to_stick)
        bk+=1
        return
    else:
        TowerOfHanoi(n-1,from_stick,to_stick,aux_stick)
        print('Move from', from_stick, 'to', to_stick)
        bk+=1
        TowerOfHanoi(n-1,aux_stick,from_stick,to_stick)

TowerOfHanoi(3,'A','B','C')
print(bk)