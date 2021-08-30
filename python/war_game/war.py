from random import shuffle

# VARIABLES FOR CREATING CARDS
SUITE = 'H D S C'.split()

RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()

class Deck():
  def __init__(self):
    self.cards = [(s,r) for s in SUITE for r in RANKS]

  def shuffleDeck(self):
    shuffle(self.cards)

  def splitCards(self):
    return (self.cards[:26 ], self.cards[26: ])
  

class Hand():
  def __init__(self, cards) :
    self.cards = cards

  def __str__(self) -> str:
    return 'Contains {} cards'.format(len(self.cards))

  def add_card(self, card):
    self.cards.extend(card)

  def remove_card(self):
    return self.cards.pop()

class Player():
  def __init__(self,name,hand) -> None:
      self.name =name
      self.hand = hand

  def play_card(self):
    drawn_card = self.hand.remove_card()
    print('{} has drawn {}'.format(self,drawn_card))
    print('\n')
    return drawn_card

  def remove_war_cards(self):
    war_cards =[]
    for x in range(3):
      war_cards.append(self.hand.remove_card())
    return war_cards
  
  def cards_left(self):
    """
      Returns True if player still has cards
    """
    return len(self.hand.cards) !=  0



print('Welcome to war, Begin')



deck = Deck()
deck.shuffleDeck()

first,second = deck.splitCards()

# create players
player1_name = input('Player 1, what is your name ')
player2_name = input('Player 2, what is your name ')
player1 = Player(player1_name, Hand(first))
player2 = Player(player2_name, Hand(second))


# play game
rounds = 0;
war_count =0

while player1.cards_left() and player2.cards_left():
  rounds +=1
  print('Next round')
  print('current standings')
  print(player1.name + ' has count:'+ str(len(player1.hand.cards))+'cards')
  print(player2.name + ' has count:'+ str(len(player2.hand.cards))+'cards')
  print('play a card \n')

  table_cards =[]
  player1_card = player1.play_card()
  player2_card = player2.play_card()

  table_cards.append(player1_card)
  table_cards.append(player2_card)

  if player1_card[1] == player2_card[1]:
    war_count += 1
    print('war111')
    table_cards.extend(player1.remove_war_cards())
    table_cards.extend(player2.remove_war_cards())
    if RANKS.index(player1_card[1]) < RANKS.index(player2_card[1]) :
        player1.hand.add_card(table_cards)
    else: 
      player2.hand.add_card(table_cards)
  elif RANKS.index(player1_card[1]) < RANKS.index(player2_card[1]) :
        player1.hand.add_card(table_cards)
  else: 
      player2.hand.add_card(table_cards)

print('Game over, Total rounds:'+ str(rounds))
print('Number of wars:'+str(war_count)) 
print(player1.cards_left())
print(player2.cards_left())
winner =''
if player1.cards_left() and not player2.cards_left(): 
  winner = player1.name ;
else:
  winner = player2.name
print('Winner:'+str(winner))
