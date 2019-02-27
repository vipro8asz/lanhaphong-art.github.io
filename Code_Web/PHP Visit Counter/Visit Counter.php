<center>
<span style="color:#008000;font-family:Arial;font-size:19px;">

<?php

// Add correct path to your countlog.txt file.
$path = 'Visit Counter.txt';

// Opens countlog.txt to read the number of hits.
$file  = fopen( $path, 'r' );
$count = fgets( $file, 100000 );
fclose( $file );

// Update the count.
$count = abs( intval( $count ) ) + 1;

// Output the updated count.
echo "Tổng số : {$count} lượt xem trang\n";

// Opens countlog.txt to change new hit number.
$file = fopen( $path, 'w' );
fwrite( $file, $count );
fclose( $file );