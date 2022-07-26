{-# LANGUAGE NoImplicitPrelude #-}
module GenerateThreeAndFive
  ( generateThreeAndFive
  ) where
import RIO

generateThreeAndFive :: Integer -> [Integer]
generateThreeAndFive x = [ y | y <- [1..(x - 1)], y `mod` 3 == 0 || y `mod` 5 == 0]



