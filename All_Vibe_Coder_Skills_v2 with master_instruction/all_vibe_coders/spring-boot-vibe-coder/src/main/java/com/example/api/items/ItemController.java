package com.example.api.items;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService; // Constructor injection — never @Autowired on fields

    @GetMapping
    public ResponseEntity<List<ItemResponseDto>> findAll() {
        // Business logic lives in ItemService — not here
        return ResponseEntity.ok(itemService.findAll());
    }
}
