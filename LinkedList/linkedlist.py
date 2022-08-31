"""
building out the constructor of a linked list
"""


# create a Node constructor

class Node:
    def __init__(self, value):
        self.value = value


class LinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1
