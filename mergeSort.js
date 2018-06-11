function merge( arr1, arr2 ) {
    var totalLength = arr1.length + arr2.length;
    var mergedArray = [];
    var arr1Index = 0;
    var arr2Index = 0;
    for( var i = 0; i < totalLength; i++ ) {
        if( arr1Index == arr1.length ) {
            mergedArray.push( arr2[arr2Index] );
            arr2Index++;
        }
        else if( arr2Index == arr2.length ) {
            mergedArray.push( arr1[arr1Index] );
            arr1Index++;
        }
        else if( arr1[arr1Index] < arr2[arr2Index] ) {
            mergedArray.push( arr1[arr1Index] );
            arr1Index++;
        }
        else {
            mergedArray.push( arr2[arr2Index] );
            arr2Index++;
        }
    }
    return mergedArray;
}

function mergeSort( arr ) {

    if( arr.length == 1 )
        return arr;

    var mid = parseInt( arr.length / 2 );
    var leftArr = mergeSort( arr.slice( 0, mid ) );
    var rightArr = mergeSort( arr.slice( mid, arr.length ) );

    return merge( leftArr, rightArr );
}

array = [ 1, 4, 6, 7, 3, 2, 5, 12, 23, 435, 555, 190 ];

console.log( mergeSort( array ) );