module Main where

import GenerateThreeAndFive

main :: IO ()
main =
    do
      print "The solution to Euler's project problem one is:"
      print(sum(generateThreeAndFive 1000))
