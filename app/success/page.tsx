"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto py-16 layout-space">
      <Card className="text-center shadow-lg">
        <CardContent className="p-12 space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-gray-900">
              Payment Successful!
            </h1>
            <p className="text-md text-gray-600">
              Thank you for your purchase. Your order is being processed and you
              will receive a confirmation email shortly.
            </p>
          </div>

          <div className="pt-6 space-y-3">
            <Button
              asChild
              className="w-full h-12 text-md bg-black hover:bg-gray-800"
            >
              <Link href="/products">Continue Shopping</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full h-12 text-md bg-transparent"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
