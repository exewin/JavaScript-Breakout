var trueBlocks = [
0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
9,9,9,9, 9,9,9,9, 9,9,9,9, 9,9,9,9,
1,1,0,0, 0,0,1,1, 1,1,0,0, 0,0,1,1,
1,0,0,0, 0,0,1,1, 1,1,0,0, 0,0,0,1,
0,0,0,0, 0,9,2,2, 2,2,9,0, 0,0,0,0,
0,1,1,0, 0,0,0,0, 0,0,0,0, 0,1,1,0,
0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
];

/*
each level can have 224 blocks
which are splitted in 14 lines
each containing 16 blocks 
*/

/*
number defines type of block:
0 - empty
1,2,3,4,5,6,7,8 - destructible block (number means HP of block) 
9 - indestructible block
block is represented by unique color

since blocks with hp>4 are pretty annoying
I strongly recommend to avoid them

in future they may represent some special blocks
like TNT
*/

/* some patterns to copy to speed up level creation
0,0,0,0,
1,1,1,1,
1,1,1,1,1,1,1,1,
2,2,2,2,
2,2,2,2,2,2,2,2,
3,3,3,3,
4,4,4,4,
5,5,5,5,
9,9,9,9,

0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
9,9,9,9, 9,9,9,9, 9,9,9,9, 9,9,9,9, - border to make level smaller
*/



