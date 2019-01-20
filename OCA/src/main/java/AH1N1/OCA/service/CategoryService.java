package AH1N1.OCA.service;

import AH1N1.OCA.model.CategoryDto;
import AH1N1.OCA.repo.CategoryReposiotory;
import AH1N1.OCA.repo.entiity.Category;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CategoryService {

    private final CategoryReposiotory categoryReposiotory;
    private final ModelMapper mapper = new ModelMapper();


    public List<CategoryDto> getAll() {
        return categoryReposiotory.findAll().stream()
                .map(obj -> mapper.map(obj, CategoryDto.class))
                .collect(Collectors.toList());
    }

    public CategoryDto save(CategoryDto category) {
        Long id = category.getId();

//        if(!Objects.isNull(id)){
//            Category toUpdate = categoryReposiotory.findById(id).orElse(category);
//
//        }
        return mapper.map(categoryReposiotory.save(mapper.map(category, Category.class)), CategoryDto.class);
    }

    public CategoryDto get(Long id) {
        Category category = categoryReposiotory.findById(id).orElseThrow();
        category.getFolders().size(); //force retrieving folders
        return mapper.map(category, CategoryDto.class);
    }
}
