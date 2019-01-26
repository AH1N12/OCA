package AH1N1.OCA.service;

import AH1N1.OCA.repo.CategoryReposiotory;
import AH1N1.OCA.repo.entiity.Category;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CategoryService {

    private final CategoryReposiotory categoryReposiotory;

    public List<Category> getAllCategories() {
        return categoryReposiotory.findAll();
    }

    public Category createNewCategory(Category category) {
        if (Objects.nonNull(category.getId())) throw new RuntimeException("CategoryId must be null");
        return categoryReposiotory.save(category);
    }

    public Category updateCategoryById(Category category) {
        if (Objects.isNull(category.getId())) throw new RuntimeException("CategoryId can not be null");
        return categoryReposiotory.findById(category.getId()).map(found -> {
            found.setName(category.getName());
            return categoryReposiotory.save(found);
        }).orElseThrow(() -> new RuntimeException("CategoryId " + category.getId() + " not found"));
    }
}
