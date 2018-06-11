// do binary search on a sorted rotated array and find minimun.

function binarySearchFindMin( arr, start, end ) {
    if( (end - start) <= 1 )
        return (arr[start] > arr[end])? arr[end]: arr[start];

    var mid = parseInt( (start + end) / 2 );

    if( arr[mid] < arr[mid-1] )
        return arr[mid];

    // case 1, if mid > end
    if( arr[mid] > arr[end] )
        return binarySearchFindMin( arr, mid, end );
    else
        return binarySearchFindMin( arr, start, mid );
}

var array1 = [ 5, 1, 2, 3, 4 ];
var array2 = [ 4, 5, 0, 2, 3 ];
var array3 = [ 5, 6, 0, 1, 2, 3, 4 ];

console.log( binarySearchFindMin( array1, 0, array1.length - 1 ) );
console.log( binarySearchFindMin( array2, 0, array2.length - 1 ) );
console.log( binarySearchFindMin( array3, 0, array3.length - 1 ) );
