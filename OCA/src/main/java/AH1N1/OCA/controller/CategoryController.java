package AH1N1.OCA.controller;

import AH1N1.OCA.repo.entiity.Category;
import AH1N1.OCA.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RequestMapping(value = "/category", produces = "application/json", consumes = "application/json")
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @PostMapping
    public Category createNewCategory(@Valid @RequestBody Category category) {
        return categoryService.createNewCategory(category);
    }

    @PutMapping
    public Category updateCategoryById(@Valid @RequestBody Category category) {
        return categoryService.updateCategoryById(category);
    }
}
