package main

import "fmt"

func main() {
	mybill := newBill(("mario's"))

	mybill.updateTip(10.00)
	mybill.addItem("onion", 10)

	fmt.Println(mybill.format())

}
