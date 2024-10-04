# Flipdeal Product Ordering Page

![](https://metafoliopublic.blob.core.windows.net/submission-images/1718972797825_Screenshot_2024-06-21_at_5.56.18%E2%80%AFPM.png)

**What are the various actions a user has to take?**

1.  Add all the 3 Products to the Cart. 
2.  Once the products are added, check for the membership status.    
3.  If the membership status is “Standard”: No Discount is Added. If the membership status is “Prime”: 10% discount is added to the total cart amount.    
4.  Once done, select the location where you want your package to be delivered. We have 4 cities:   
-   Mumbai   
-   Delhi  
-   Chennai   
-   Kolkata  
5.  Based on the distance for the selected city, it calculates the “Shipping Cost”.  
6.  Now, select the type of “Shipping Method”. If the Shipping method is “Standard”, it calculates the time in which the package will be delivered in which is 1 day per 50 kms. If the Shipping method is “Express”, it calculates the time in which the package will be delivered which is 1 day per 100 kms 
7.  The Estimated Delivery time is visible.    
8.  Based on all the factors, the total payable amount is calculated.   
    1.  Total Cart Amount      
    2.  Membership Discount (if any)    
    3.  Shipping Cost (Based on the Location)     
    4.  Estimated Delivery Time (in days)    
    5.  Tax Rate      
    6.  Loyalty Points


## API Endpoints

-   **Calculate Cart Total**: When a user adds a new item to the cart, the frontend makes a `GET` request to `/cart-total` with the price of the new item and the current cart total to update the total price. `http://localhost:3000/cart-total?newItemPrice=1200&cartTotal=0`
    
-   **Apply Membership Discount**: If the user is a member, the frontend makes a `GET` request to `/membership-discount` to apply any applicable discounts to the cart total. `http://localhost:3000/membership-discount?cartTotal=3600&isMember=true`
    
-   **CalculateTax**: For the total cart amount, the frontend makes a `GET` request to `/calculate-tax` to apply 5% tax rate on the total cart amount. `http://localhost:3000/calculate-tax?cartTotal=3600`
    
-   **Estimate Delivery Time**: The user can see the estimated delivery time by making a `GET` request to `/estimate-delivery` with the chosen shipping method and delivery distance. `http://localhost:3000/estimate-delivery?shippingMethod=express&distance=600`  
    
-   **Calculate Shipping Cost**: The shipping cost based on the weight of the items and the delivery distance is calculated by making a `GET` request to `/shipping-cost`. `http://localhost:3000/shipping-cost?weight=2&distance=600`
    
-   **Calculate Loyalty Points:** To calculate the loyalty points, front end is making a `GET` request to `/loyalty-points` to add 2 points per $1. ` http://localhost:3000/loyalty-points?purchaseAmount=3600`

  **Deployed Link:**  [flipdeal-product-ordering](https://flipdeal-product-ordering.vercel.app)
  
  **Note:** Check API endpoints on the deployed link or use this frontend application - [UI](https://bd1-1.vercel.app/) to API response.
