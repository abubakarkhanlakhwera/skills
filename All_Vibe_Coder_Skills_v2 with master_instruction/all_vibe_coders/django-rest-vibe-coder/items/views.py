from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Item
from .serializers import ItemSerializer


class ItemListView(ListAPIView):
    """
    Returns a list of items for the authenticated user.
    Business logic lives in services.py — not here.
    """
    serializer_class = ItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Item.objects.filter(user=self.request.user).select_related("category")
