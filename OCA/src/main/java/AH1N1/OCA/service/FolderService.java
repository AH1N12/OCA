package AH1N1.OCA.service;

import AH1N1.OCA.repo.CategoryReposiotory;
import AH1N1.OCA.repo.FolderRepository;
import AH1N1.OCA.repo.entiity.Folder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class FolderService {

    private final FolderRepository folderRepository;
    private final CategoryReposiotory categoryReposiotory;

    public List<Folder> getAllFoldersByCategoryId(Long categoryId) {
        return folderRepository.findByCategoryId(categoryId);
    }

    public Folder createNewFolderInCategory(Long categoryId, Folder folder) {
        return categoryReposiotory.findById(categoryId).map(category -> {
            folder.setCategory(category);
            folder.setId(null);
            Folder result = folderRepository.save(folder);
            result.setCategoryId(categoryId);//bo jpa zwraca null
            return result;
        }).orElseThrow(() -> new RuntimeException("CategoryId " + categoryId + " not found"));
    }

    public Folder updateFolderInCategory(Long categoryId, Folder folder) {
        if (!categoryReposiotory.existsById(categoryId))
            throw new RuntimeException("CategoryId " + categoryId + " not found");

        if (Objects.isNull(folder.getId())) throw new RuntimeException("FolderId can not be null");
        return folderRepository.findById(folder.getId()).map(folderFound -> {
            folderFound.setName(folder.getName());
            folderFound.setPosition(folder.getPosition());
            return folderRepository.save(folderFound);
        }).orElseThrow(() -> new RuntimeException("FolderId " + folder.getId() + " not found"));
    }
}
