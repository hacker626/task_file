import math

productA = int(input("Enter the quantity of product A: "))
wrapA = input("Is product A wrapped(y/n): ")
productB = int(input("Enter the quantity of product B: "))
wrapB = input("Is product A wrapped(y/n): ")
productC = int(input("Enter the quantity of product C: "))
wrapC = input("Is product A wrapped(y/n): ")

subtotalA = 20*productA
subtotalB = 40*productB
subtotalC = 50*productC
subtotal = subtotalA + subtotalB + subtotalC
print("Total rough estimate without discounts and other charges: ",subtotal)


discount1 = 0
discount2 = 0
discount3 = 0
discount4 = 0

if(subtotal > 200):
	discount1 =10
if(max(productA,productB,productC)>10):
	discount2 = (5*subtotal)/100
if(productA+productB+productC>20):
	discount3 = (10*subtotal)/100
if(productA+productB+productC>30 and (max(productA,productB,productC))>15):
	temp = 0
	if(productA > 15):
		discount4+=(0.5*subtotalA)
	if(productB > 15):
		discount4+=(0.5*subtotalB)
	if(productC > 15):
		discount4 += (0.5*subtotalC)


maxdiscount = max(discount1,discount2,discount3, discount4)

finaldiscount = []
if(maxdiscount == discount1):
	finaldiscount.append("First discount")
	finaldiscount.append(discount1)
elif(maxdiscount == discount2):
	finaldiscount.append("Second discount")
	finaldiscount.append(discount2)
elif(maxdiscount == discount3):
	finaldiscount.append("Third discount")
	finaldiscount.append(discount3)
else:
	finaldiscount.append("Fourth discount")
	finaldiscount.append(discount4)
	
print("Discount category: " ,finaldiscount[0])
print("Discount amount: ",finaldiscount[1])


#wrapping charges
wrapfee = 0
if(wrapA == "y"):
	wrapfee += productA
if(wrapB == "y"):
	wrapfee += productB
if(wrapC == "y"):
	wrapfee+= productC
	
	
#delivery charges
deliveryfee = 0
deliveryfee += (math.ceil(productA/10)*5)
deliveryfee += (math.ceil(productB/10)*5)
deliveryfee += (math.ceil(productC/10)*5)

print("wrapfee: ",wrapfee)
print("delivery fee: ",deliveryfee)

print("Total fee: ",subtotal+wrapfee+deliveryfee-finaldiscount[1])


	