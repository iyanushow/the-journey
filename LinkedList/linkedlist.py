"""
building out the constructor of a linked list
"""


# create a Node constructor

class Node:
	def __init__(self, value: object) -> object:
		self.value = value
		self.next = None


class LinkedList:
	def __init__(self, value):
		new_node = Node(value)
		self.head = new_node
		self.tail = new_node
		self.length = 1

	def prepend(self, value):
		new_node = Node(value)
		if self.length == 0:
			self.head = new_node
			self.tail = new_node
		else:
			new_node.next = self.head
			self.head = new_node
		self.length += 1
		return True
