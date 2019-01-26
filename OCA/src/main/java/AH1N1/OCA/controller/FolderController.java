package AH1N1.OCA.controller;

import AH1N1.OCA.repo.entiity.Folder;
import AH1N1.OCA.service.FolderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "category/{categoryId}/folder")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class FolderController {

    private final FolderService folderService;

    @GetMapping()
    public List<Folder> getAllFoldersByCategoryId(@PathVariable Long categoryId) {
        return folderService.getAllFoldersByCategoryId(categoryId);
    }

    @PostMapping()
    public Folder createFolderInCategory(@PathVariable Long categoryId, @Valid @RequestBody Folder folder) {
        return folderService.createNewFolderInCategory(categoryId, folder);
    }

    @PutMapping()
    public Folder updateFolderInCategory(@PathVariable Long categoryId, @Valid @RequestBody Folder folder) {
        return folderService.updateFolderInCategory(categoryId, folder);
    }

}
