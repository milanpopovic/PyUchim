function select_sample_searching(){
var z = new Array();

z[1] = `
'''
Sequential search
'''
def sequential_search(seq, n):
    ''' an example of sequential search (for items stored in a collection) '''
    for item in seq:
        if item == n: return True
    return False


def test_sequential_search(module_name='this module'):
    seq = [1, 5, 6, 8, 3]
    n1 = 5
    n2 = 7
    assert(sequential_search(seq, n1) == True)
    assert(sequential_search(seq, n2) == False)

    s = 'Tests in {name} have {con}!'
    print(s.format(name=module_name, con='passed'))

if __name__ == '__main__':
    test_sequential_search()


"""
Case	            Best Case	    Worst Case	    Average Case
item is present         1               n               n/2
item is not present     n	            n               n
"""
`

z[2] = `
'''
Binary search
'''

def binary_search(array, item, hi=None, lo=0):
    hi = hi or len(array)
    if hi < lo:
        return False

    mid = (hi + lo)//2
    if  item == array[mid]:
        return mid
    elif item < array[mid]:
        return binary_search(array, item, hi=mid-1, lo=lo)
    else:
        return binary_search(array, item, hi=hi, lo=mid+1)

def binary_search_iter(array, item):
    lo, hi = 0, len(array)

    while lo < hi:
        mid = (hi+lo)//2
        if array[mid] == item:
            return mid
        elif array[mid] > item:
            hi = mid
        else:
            lo=mid+1
    return False

def test_binary_search(module_name='this module'):
    assert(binary_search([2,3,5,6,8,10,15,23], 15) == 6)
    assert(binary_search([2,3,5,6,8,10,15,23], 4) == False)
    assert(binary_search([1,3,4,5,7,8 ,10,12,23], 10) == 6)
    assert(binary_search([1,3,4,5,7,8 ,10,12,23], 22) == False)
    
    assert(binary_search_iter([2,3,5,6,8,10,15,23], 15) == 6)
    assert(binary_search_iter([2,3,5,6,8,10,15,23], 4) == False)
    assert(binary_search_iter([1,3,4,5,7,8 ,10,12,23], 10) == 6)
    assert(binary_search_iter([1,3,4,5,7,8 ,10,12,23], 22) == False)

    s = 'Tests in {name} have {con}!'
    print(s.format(name=module_name, con='passed'))

if __name__ == '__main__':
    test_binary_search()
`

prog = ''
for (var i=1; i < z.length; i++)
  prog = prog+z[i];
$model.view.setCode(prog);
$model.reset();
$("#open_file").val("");
}
