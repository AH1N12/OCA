package AH1N1.OCA.controller;

import AH1N1.OCA.model.CategoryDto;
import AH1N1.OCA.repo.entiity.Category;
import AH1N1.OCA.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RequestMapping(value = "/category")
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping(value = "/all", produces = "application/json")
    public List<CategoryDto> getAll() {
        return categoryService.getAll();
    }

    @PostMapping(value = "save", produces = "application/json", consumes = "application/json")
    public CategoryDto save(@Valid @RequestBody CategoryDto category) {
        return categoryService.save(category);
    }

    @GetMapping(value = "/{id}")
    public CategoryDto get(@PathVariable Long id) {
        return categoryService.get(id);

    }
}
