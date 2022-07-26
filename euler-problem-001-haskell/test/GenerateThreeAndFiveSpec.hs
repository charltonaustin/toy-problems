import Test.Hspec
import Test.QuickCheck
import GenerateThreeAndFive

main :: IO ()
main = hspec $ do
  describe "generateThreeAndFive" $ do
    it "should return an empty list" $ generateThreeAndFive 0 `shouldBe` ([] :: [Integer])
    it "should return [3]" $ generateThreeAndFive 4 `shouldBe` ([3])
    it "should return [3, 5]" $ generateThreeAndFive 6 `shouldBe` ([3, 5])
    it "should return [3, 5, 6, 9]" $ generateThreeAndFive 10 `shouldBe` ([3, 5, 6, 9])
    it "should return 233168" $ (sum (generateThreeAndFive 1000)) `shouldBe` (233168)