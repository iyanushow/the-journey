import random
# select result and store 
#  take input from user 
#  run clues 
# clue 1 if one of user input is in result but in wrong position print close
# if one of user input is in result and in correct position print match
# else print nope
# if all three are in the right place break game



# START
# init function
# define select_result: 

def start_game(result):
  # select result 
  
  user_input = getinput()
  is_correct=check(user_input, result)
  if is_correct == 'correct':
    print('well done you won the game')
    print('Play again?')
    play_again = input()
    if play_again == 'yes':
      init_game()
    else :
      return
  else:
    print(is_correct)
    start_game(result)


def getinput():
  return [value for value in input()]


def check(context,result):
  # CHECK IF MATCH 
  if context == result:
    return 'correct'
  else:  
    return_value= ''
    n=0
    for i in context:
      print(i, result[n])
      if i == result[n]:
        return_value = 'match'
        break
      elif i in result:
        return_value= 'close'
        break
      else :
        n+=1
        continue
        
    return return_value or 'nope'
  
def init_game():
  print('please enter a three digit number')
  result = random.randint(100,999)
  print(result)
  start_game([value for value in str(result)])

init_game()