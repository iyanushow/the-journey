package main
import "fmt"

func main(){

	var names = [3]int{1,2,3}
	ranges:=names[:2]

	fmt.Printf("names %T", ranges)
}