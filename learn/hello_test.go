package main

import "testing"

func testHello(t *testing.T) {
	got := Hello("David")

	want := "Hello, David"
	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}
